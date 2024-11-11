import React from 'react';

interface ArticleCard {
    title: string;
  href: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCard> = ({ title, description, href }) => {
    return (
        <a
      href={href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-zinc-400">{description}</p>
      </article>
    </a>
    );
};

export default ArticleCard;