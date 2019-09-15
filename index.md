---
---

<ul class="latest">
{% for post in site.posts limit:10 %}
  <li>
    <article class="{{ post.categories }}">
      <header>
        <h3><a href="{{ post.url }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" | strip_newlines }}</a></h3>
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
  </li>
{% endfor %}
</ul>
