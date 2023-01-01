export enum ButtonState {
  Active = 'active',
  Normal = 'normal',
}

export type TaskItem = {
  id: string;
  title: string;
  done: boolean;
};
