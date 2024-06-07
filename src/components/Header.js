'use client';

import { CommandDemo } from "./Command";

export function Header(){
    return (
        <div className="flex gap-4 p-4 border-b">
            <CommandDemo/>
        </div>
    );
}