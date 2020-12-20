import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    onClick(): void;
    label: ReactNode;
}

// sample button impl
export const Button: FC<ButtonProps> = ({ onClick, label }) => {
    return <button onClick={onClick}>{label}</button>;
};
