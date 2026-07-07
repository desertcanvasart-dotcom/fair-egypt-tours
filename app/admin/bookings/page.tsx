import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/db";
import { setBookingStatus, deleteBooking } from "@/lib/booking-actions";
import ConfirmButton from "@/components/admin/ConfirmButton";

const STATUSES = ["new", "contacted", "won", "lost", "archived"];

function fmt(d: Date) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(d);
}

export default async function BookingsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  await requireUser();
  const sp = await searchParams;
  const active = sp.status && STATUSES.includes(sp.status) ? sp.status : null;
  const [bookings, total, newCount] = await Promise.all([
    prisma.booking.findMany({ where: active ? { status: active } : {}, orderBy: { createdAt: "desc" } }),
    prisma.booking.count(),
    prisma.booking.count({ where: { status: "new" } }),
  ]);

  return (
    <>
      <div className="adm__top">
        <div>
          <h1>Bookings</h1>
          <div className="sub">{total} request{total === 1 ? "" : "s"} · {newCount} new</div>
        </div>
      </div>

      <div className="adm__body">
        <div className="adm__toolbar">
          <div className="adm__tabs">
            <a href="/admin/bookings" className={!active ? "active" : ""}>All</a>
            {STATUSES.map((st) => (
              <a key={st} href={`/admin/bookings?status=${st}`} className={active === st ? "active" : ""}>{st}</a>
            ))}
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="adm__empty">No bookings{active ? ` with status “${active}”` : " yet"}.</div>
        ) : (
          <div className="bkg-list">
            {bookings.map((b) => {
              let places: string[] = [];
              try { places = b.places ? (JSON.parse(b.places) as string[]) : []; } catch { places = []; }
              return (
                <div className="bkg" key={b.id}>
                  <div className="bkg__l">
                    <div className="bkg__metarow">
                      <span className={`bkg__kind bkg__kind--${b.kind}`}>{b.kind === "tour" ? "Tour" : "Custom quote"}</span>
                      <span className={`bkg__st bkg__st--${b.status}`}>{b.status}</span>
                      <time className="bkg__date">{fmt(b.createdAt)}</time>
                    </div>
                    <h3>{b.name}</h3>
                    <div className="bkg__contact">
                      {b.phone ? <a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a> : null}
                      {b.email ? <a href={`mailto:${b.email}`}>{b.email}</a> : null}
                    </div>
                    <div className="bkg__detail">
                      {b.tourTitle ? <p><b>Tour:</b> {b.tourTitle}</p> : null}
                      {places.length ? <p><b>Interested in:</b> {places.join(", ")}</p> : null}
                      <div className="bkg__tags">
                        {b.days ? <span className="bkg__tag">{b.days}</span> : null}
                        {b.adults != null ? <span className="bkg__tag">{b.adults} adult{b.adults === 1 ? "" : "s"}</span> : null}
                        {b.children ? <span className="bkg__tag">{b.children} child{b.children === 1 ? "" : "ren"}</span> : null}
                        {b.dates ? <span className="bkg__tag">Date: {b.dates}</span> : null}
                      </div>
                      {b.notes ? <p className="bkg__notes">“{b.notes}”</p> : null}
                    </div>
                  </div>
                  <div className="bkg__act">
                    <form action={setBookingStatus} className="bkg__status">
                      <input type="hidden" name="id" value={b.id} />
                      <select name="status" defaultValue={b.status}>
                        {STATUSES.map((st) => <option key={st} value={st}>{st}</option>)}
                      </select>
                      <button type="submit" className="abtn abtn--sm abtn--primary">Update</button>
                    </form>
                    <ConfirmButton action={deleteBooking.bind(null, b.id)} label="Delete" confirm="Delete this booking request? This cannot be undone." />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
