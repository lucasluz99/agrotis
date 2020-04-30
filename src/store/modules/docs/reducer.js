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
    {
      name: 'Finalizado',
      description: 'Quando o contrato foi atendido e não pode ser modificado',
    },
    {
      name: 'Finalizado',
      description: 'Quando o contrato foi atendido e não pode ser modificado',
    },
    {
      name: 'Andamento',
      description: 'Quando o contrato está em andamento e pode ser alterado',
    },
    {
      name: 'Finalizado',
      description: 'Quando o contrato foi atendido e não pode ser modificado',
    },
    {
      name: 'Finalizado',
      description: 'Quando o contrato foi atendido e não pode ser modificado',
    },
    {
      name: 'Finalizado',
      description: 'Quando o contrato foi atendido e não pode ser modificado',
    },
  ],
  filter: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@docs/ADD':
      return {
        filter: '',
        docs: [
          ...state.docs,
          { name: action.name, description: action.description },
        ],
      };
    case '@docs/FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
