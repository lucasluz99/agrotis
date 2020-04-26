const INITIAL_STATE = {
  docs: [
    {
      name: 'Andamento',
      description: 'Quando o contrato está em andamento e pode ser alterado',
    },
    {
      name: 'Finalizado',
      description: 'Quando o contrato foi atendido e não pode ser modificado',
    },
  ],
  filtredDocs: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@docs/ADD':
      return { ...state, data: [...state.data, action.paylaod] };
    default:
      return state;
  }
}
