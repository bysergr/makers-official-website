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
          <Disclosure.Button className="my-6 dark:text-white font-semibold text-lg text-left flex gap-2 justify-between items-center w-full px-4 transition-colors duration-300 rounded-lg">
            <p className="block max-w-[90%]">{title}</p>
            <ChevronDownIcon className={clsx("w-6 h-6 transition-transform", open ? "rotate-180" : "rotate-0")} />
          </Disclosure.Button>
          <Animation>
            <Disclosure.Panel className="text-gray-800 dark:text-gray-200 my-6 px-4">
              {answer}
            </Disclosure.Panel>
          </Animation>
        </>
      )}
    </Disclosure>
  );
}

export default QuestionItem;
