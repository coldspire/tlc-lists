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
        {% if list.status == "draft" %}
        {{ listTitle }} <span class="badge badge--draft">coming soon</span>
        {% else %}
        <a href="{{ listId | slugify }}/">{{ listTitle }}</a> <span class="badge badge--released">released</span>
        {% endif %}
    </li>
{%- endfor -%}
</ul>
