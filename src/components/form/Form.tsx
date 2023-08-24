import { RiContactsLine, RiMailLine, RiSmartphoneLine } from "react-icons/ri";
interface Props{
    rows:number;
    cols:number;
}
const Form = ({rows, cols,}:Props) => {
  return (
    <>
      <form
        action=""
        method="post"
        className="bg-natural-white flex flex-col px-8"
      >
        <div className="grid grid-cols-1  items-start gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <div className="relative">
                <input type="text" name="name" id="name" className="relative bg-natural-light-grey px-10 py-2 text-lg rounded-md focus:outline-none focus:ring-1 focus:ring-natural-orchid focus:bg-natural-white w-full" />
                <RiContactsLine className="absolute inset-x-4 inset-y-4" />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <div className="relative">
                <input type="email" name="name" id="email" className="relative bg-natural-light-grey px-10 py-2 text-lg rounded-md focus:outline-none focus:ring-1 focus:ring-natural-orchid focus:bg-natural-white w-full"/>
                <RiMailLine className="absolute inset-x-4 inset-y-4 "  />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="number">Phone Number</label>
              <div className="relative">
                <input type="number" name="name" id="number" className="relative bg-natural-light-grey px-10 py-2 text-lg rounded-md focus:outline-none focus:ring-1 focus:ring-natural-orchid focus:bg-natural-white w-full [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"/>
                <RiSmartphoneLine className="absolute inset-x-4 inset-y-4 "  />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" rows={rows} cols={cols} className="bg-natural-light-grey px-4 py-6  text-lg rounded-md focus:outline-none focus:ring-1 focus:ring-natural-orchid focus:bg-natural-white w-full [resize:none]"></textarea>
          </div>
        </div>
        <button type="button" title="Send messsage" className="bg-natural-orchid p-4 text-xl text-natural-white rounded-md w-2/3 mx-auto my-6">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Form;
