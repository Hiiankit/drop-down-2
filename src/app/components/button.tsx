import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  as: Tag = "button",
}) => (
  <Tag onClick={onClick} className={`px-4 py-2 rounded-lg ${className}`}>
    {children}
  </Tag>
);
