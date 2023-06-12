export interface ISelectableChildPath {
    name: string;
    path: string;
}

export interface ISidebarMenu {
    name: string;
    path: string;
    childPath: string[];
    selectableChildPath?: ISelectableChildPath[];
}
