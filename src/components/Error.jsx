export default function Error() {
  return (
    <div className="container mx-auto my-16 flex justify-center">
      <div className="h-max w-max rounded-md bg-yellow-400 p-4 shadow-md dark:bg-yellow-500 max-[500px]:p-3">
        <p className="mb-2 text-xl font-medium text-red-600 max-[600px]:text-lg max-[500px]:text-sm">
          Error: Couldn&apos;t Fetched Data
        </p>
        <p className="text-zinc-700 max-[768px]:w-[300px] max-[600px]:text-sm max-[500px]:w-[200px] max-[500px]:text-[10px] max-[500px]:leading-3">
          There was an error in fetching data from Supabase. Please try again
          later or contact the support team
        </p>
      </div>
    </div>
  );
}
