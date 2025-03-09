---
layout: index.liquid
docTitle: Lists
---

# Lists

<ul class="list list--no-style">
{% assign listIds = lists | keys %}
{%- for listId in listIds -%}
{% assign list = lists[listId] %}
    <li class="list__item">
        {% assign listTitle = list.title %}
        {% if list.isDraft %}
        {{ listTitle }} (coming soon)
        {% else %}
        <a href="{{ listId | slugify }}/">{{ listTitle }}</a>
        {% endif %}
    </li>
{%- endfor -%}
</ul>
