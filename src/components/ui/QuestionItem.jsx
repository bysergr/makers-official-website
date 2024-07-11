import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

function Animation({ children }) {
  return (
    <Transition
      enter="transition duration-200 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-150 ease-in"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      {children}
    </Transition>
  );
}

function QuestionItem({ title, answer }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="font-semibold text-lg text-left flex gap-2 justify-between items-center w-full py-3 px-4 bg-white hover:bg-gray-100 transition-colors duration-300 rounded-lg shadow-md">
            <p className="block max-w-[90%]">{title}</p>
            <ChevronDownIcon className={clsx("w-6 h-6 transition-transform", open ? "rotate-180" : "rotate-0")} />
          </Disclosure.Button>
          <Animation>
            <Disclosure.Panel className="text-gray-800 my-4 px-4">
              {answer}
            </Disclosure.Panel>
          </Animation>
        </>
      )}
    </Disclosure>
  );
}

export default QuestionItem;
