---
---

# Hello World

<ul>
{% for post in site.posts %}
  <li>
    <article class="{{ post.categories }}">
      <header>
        <h3>{{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}</h3>
        <ul class="meta">
          <li>{{ post.date | date: "%-d %B %Y" }}</li>
          {% if post.link %}
            {% assign link_parts = post.link | split: "/" %}
            <li><a href="{{ post.link }}">{{ link_parts[2] }}</a></li>
          {% endif %}
        </ul>
      </header>
      {{ content }}
    </article>
  </li>
{% endfor %}
</ul>

<!--
How about a little source code?

```ruby
class Car
  attr_accessor :make, :speed
  def init(make)
    @make = make
    @speed = 0
  end
end

@car = Car.new('Mini')
```

Maybe some CSS too?

```css
@media screen and (min-width: 300px) {
  html {
    font-size: 3.021em;
  }
}
```

```git
$ git remote add origin git@github.com:bleh/meh.git
```
-->
