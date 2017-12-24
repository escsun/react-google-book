interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

export default IHotModule;
