import { FaPlus } from 'react-icons/fa';

export default function Suggestions() {
  const suggs = [
    'Send an email to the client about the new proposal',
    'Pick up the kids from school at 3 PM',
    "Prepare the presentation for Monday's meeting",
    'Book tickets for the summer vacation trip',
    'Complete the online training course by tonight',
    'Set up a new email campaign for the product launch',
    'Attend the webinar on digital marketing strategies',
    'Pay the electricity bill before the due date',
    'Bake cookies for the neighborhood bake sale',
    'Review the contract and send feedback to the lawyer',
  ];
  return (
    <button className="box-shadow flex items-center gap-2 rounded-full bg-white px-4 font-medium text-sky-500">
      <FaPlus />
      <p>Suggestions</p>
    </button>
  );
}
