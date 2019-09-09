---
title: Archive
permalink: /archive/
---

<ul class="archive">
{% for post in site.posts %}
  {% capture current_header %}{{ post.date | date: "%B %Y" }}{% endcapture %}
  {% if archive_header != current_header %}<li><h3>{{ post.date | date: "%B %Y" }}</h3>
      <ul>{% endif %}
      <li>
        [{{ post.categories | join: " " | capitalize }}] <a href="{{ post.url }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}</a>
      </li>
  {% if archive_header != current_header %}</ul>
  </li>{% endif %}
  {% capture archive_header %}{{ post.date | date: "%B %Y" }}{% endcapture %}
{% endfor %}
</ul>
