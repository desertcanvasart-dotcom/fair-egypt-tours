"use client";

export default function ConfirmButton({
  action,
  label,
  confirm,
  className = "abtn abtn--sm abtn--danger",
}: {
  action: () => Promise<void>;
  label: string;
  confirm: string;
  className?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!window.confirm(confirm)) e.preventDefault();
      }}
    >
      <button type="submit" className={className}>{label}</button>
    </form>
  );
}
