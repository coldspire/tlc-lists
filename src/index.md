---
layout: index.liquid
---

# Lists

<ul>
{% assign listIds = lists | keys %}
{%- for listId in listIds -%}
{% assign list = lists[listId] %}
<li><a href="{{ listId | slugify }}/">{{ list.title }}</a></li>
{%- endfor -%}
</ul>
