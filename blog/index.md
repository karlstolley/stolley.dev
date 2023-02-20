---
title: Latest Posts
layout: listing
---

{% for post in site.posts limit:5 %}
  <article class="{{ post.categories | join: " " }}">
    <header>
      <h2><a href="{{ post.url }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" | strip_newlines }}</a></h2>
      <ul class="meta">
        <li>{{ post.date | date: "%-d %B %Y" }}</li>
        {% if post.link %}
          {% assign link_parts = post.link | split: "/" %}
          <li><a href="{{ post.link }}">{{ link_parts[2] }}</a></li>
        {% endif %}
      </ul>
    </header>
    {{ post.content }}
  </article>
{% endfor %}

  <article>
    <header>
      <h2>Blog Archives</h2>
    </header>
    <p>Looking for more? Have a look through my <a href="/archive/">blog archive</a>.</p>
  </article>
