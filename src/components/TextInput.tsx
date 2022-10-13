import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;

}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="px-4 py-3 h-12 rounded flex items-center gap-3 bg-gray-800  w-full focus-within:ring-2 ring-cyan-300"
        >
            {props.children}    
        </div>
    );
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400' >
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 placeholder:text-gray-400 text-gray-100 text-xs outline-none"
            {...props}
        />
    );
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}