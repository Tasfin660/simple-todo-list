export default function Error() {
  return (
    <div className="container mx-auto my-16 flex justify-center">
      <div className="h-max w-max rounded-md bg-yellow-400 p-4 shadow-md">
        <p className="mb-2 text-xl font-medium text-red-600">
          Error: Couldn&apos;t Fetched Data
        </p>
        <p className="w-[450px] text-zinc-700">
          There was an error in fetching data from Supabase. Please try again
          later or contact the support team
        </p>
      </div>
    </div>
  );
}
