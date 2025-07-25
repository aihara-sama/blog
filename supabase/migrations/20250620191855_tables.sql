CREATE TABLE
  public.articles (
    id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid (),
    title TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW ()
  );

CREATE TABLE
  public.tags (
    id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid (),
    name TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW ()
  );

CREATE TABLE
  public.tags_articles (
    article_id UUID REFERENCES public.articles ON DELETE CASCADE NOT NULL,
    tag_id UUID REFERENCES public.tags ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    PRIMARY KEY (article_id, tag_id)
  );