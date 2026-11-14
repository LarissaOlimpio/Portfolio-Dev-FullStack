export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  draft?: boolean;
};

// Copy editável; os três primeiros cartões são espaços de publicação preparados.
export const posts: BlogPost[] = [
  {
    slug: 'aprendizados-com-sistemas-em-producao',
    title: '[Título do post: aprendizados com sistemas em produção]',
    date: 'Em breve',
    excerpt: 'Um espaço para registrar aprendizados sobre manutenção, testes e observabilidade.',
    body: 'Este post está sendo preparado. Em breve, um relato sobre aprendizados com sistemas em produção.',
  },
  {
    slug: 'investigando-incidentes',
    title: '[Título do post: investigando incidentes]',
    date: 'Em breve',
    excerpt: 'Notas sobre como logs, queries e testes ajudam a entender a causa de um problema.',
    body: 'Este post está sendo preparado. Em breve, notas sobre investigação e resolução de incidentes.',
  },
  {
    slug: 'construindo-um-produto-full-stack',
    title: '[Título do post: construindo um produto full stack]',
    date: 'Em breve',
    excerpt: 'Um diário de construção da plataforma de treinos, do banco de dados à interface.',
    body: 'Este post está sendo preparado. Em breve, um diário da construção de um produto full stack.',
  },
  {
    slug: 'rascunho-de-exemplo',
    title: 'Rascunho de exemplo',
    date: 'Rascunho',
    excerpt: 'Exemplo interno de post em rascunho.',
    body: 'Este texto é apenas um exemplo de rascunho e não é exibido na página pública.',
    draft: true,
  },
];
