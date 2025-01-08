---
layout: list.liquid
pagination:
  data: lists
  size: 1
  alias: listId
permalink: "{{ listId | slugify }}/index.html"
---
{% assign list = lists[listId] %}
# {{ list.title }}

{{ list.description }}

<ul>
{%- for item in list.items -%}
<li>{{ item.primary }} / {{ item.secondary }} / {{ item.additionalText }}</li>
{%- endfor -%}
</ul>

<a href="/lists/">Back to index</a>
