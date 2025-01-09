---
layout: index.liquid
---

# Lists

<ul class="list list--no-style">
{% assign listIds = lists | keys %}
{%- for listId in listIds -%}
{% assign list = lists[listId] %}
<li class="list__item"><a href="{{ listId | slugify }}/">{{ list.title }}</a></li>
{%- endfor -%}
</ul>
