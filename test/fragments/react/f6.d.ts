import { ComponentLifecycle, ReactNode, ReactInstance, DetailedHTMLFactory, DialogHTMLAttributes } from "react";

   // Base component for plain JS classes
    // tslint:disable-next-line:no-empty-interface
// declare class Component<P, S> {
//     constructor(props: P, context?: any);
//     state: Readonly<S>;
//     defaultProps?: Partial<P>;
// }
interface ReactHTML {
    dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
}