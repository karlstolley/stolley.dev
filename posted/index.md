---
title: Posts
permalink: /posted/
layout: listing
---

<ul class="archive">
{% for post in site.posts %}
  {%- assign categories = post.categories | join: " " -%}
  {%- if categories contains "posted" -%}
  {% capture current_header %}{{ post.date | date: "%B %Y" }}{% endcapture %}
  {% if last_header != current_header %}
    {% if last_header %}
      </ul></li>
    {% endif %}
    <li><h3>{{ current_header }}</h3>
      <ul>
  {% endif %}
      <li>
        <a href="{{ post.url }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" | strip_newlines }}</a>
      </li>
  {% capture last_header %}{{ post.date | date: "%B %Y" }}{% endcapture %}
  {%- endif -%}
{% endfor %}
    </ul>
  </li>
</ul>
