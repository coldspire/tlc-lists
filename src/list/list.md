---
layout: list.liquid
pagination:
  data: lists
  size: 1
  alias: listId
permalink: "{{ listId | slugify }}/index.html"
eleventyComputed:
  docTitle: "List - {{ lists[listId].title }}"
---

{% assign list = lists[listId] %}

# List: {{ list.title }}

{{ list.description }}

<ol class="list">
{%- for item in list.items -%}
<li class="list__item">
    <p class="text--primary">{{ item.primary }}</p>
    <p class="text--secondary">{{ item.secondary }}</p>
    <p class="text--additional">{{ item.additionalText }}</p>
</li>
{%- endfor -%}
</ol>

<a href="/lists/">Back to index</a>
