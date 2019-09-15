---
title: Archive
permalink: /archive/
---

<ul class="archive">
{% for post in site.posts %}
  {% capture current_header %}{{ post.date | date: "%B %Y" }}{% endcapture %}
  {% if last_header != current_header %}
    {% if last_header %}
      </ul></li>
    {% endif %}
    <li><h3>{{ current_header }}</h3>
      <ul>
  {% endif %}
      <li>
        [{{ post.categories | join: " " | capitalize }}] <a href="{{ post.url }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" | strip_newlines }}</a>
      </li>
  {% capture last_header %}{{ post.date | date: "%B %Y" }}{% endcapture %}
{% endfor %}
    </ul>
  </li>
</ul>
