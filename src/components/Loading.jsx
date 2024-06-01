export default function Loading() {
  return (
    <div className="container mx-auto mt-16 flex items-center justify-center gap-4">
      <div
        className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-zinc-700 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <p className="text-lg text-zinc-700">
        Wait a minute...tasks are being loaded from Supabase
      </p>
    </div>
  );
}
