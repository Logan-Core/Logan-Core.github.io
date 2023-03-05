---
layout: default
---

## [Post Test](./2023/03/04/post-test.html)

> Just getting stuff setup.
> Hopefully this works...
> 
>
> ```
> Posted: 03-04-2023 23:28:26
> ```
 {% for post in site.posts %}
  <article>
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    {{ post.content }}
  </article>
{% endfor %}
