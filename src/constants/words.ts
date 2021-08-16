import faker from 'faker';

export interface IWord {
  name: string;
  translate: string;
}

export const WORDS: IWord[] = new Array(10).fill('_').map(_ => ({
  name: faker.lorem.word(),
  translate: faker.lorem.word(),
}));
