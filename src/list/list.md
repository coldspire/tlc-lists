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

<header>
    <h1>List: {{ list.title }}</h1> 
</header>

<section class="description">
    {%- for line in list.description -%}
    {{ line | renderContent: "md" }}
    {%- endfor -%}
</section>

<section class="list__container">
    <ol class="list">
    {%- for item in list.items -%}
    <li class="list__item">
        <p class="text--primary">{{ item.primary }}</p>
        <p class="text--secondary">{{ item.secondary }}</p>
        <div class="text--additional">{{ item.additionalText | renderContent: "md" }}</div>
    </li>
    {%- endfor -%}
    </ol>
</section>

<footer>
    <a href="/lists/">Back to index</a>
</footer>
