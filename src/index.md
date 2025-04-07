---
layout: index.liquid
docTitle: Lists
---

# Lists

<ul class="list list--no-style">
{%- assign listIds = lists | keys -%}
{%- for listId in listIds -%}
{%- assign list = lists[listId] -%}
    <li class="list__item">
        {%- assign listTitle = list.title -%}
        {%- if list.status == "draft" -%}
        {{ listTitle }} 
        {%- else -%}
        <a href="{{ listId | slugify }}/">{{ listTitle }}</a> 
        {%- endif -%}
        {%- case list.status -%}
            {%- when "draft" -%}
                <span class="badge badge--draft">coming soon</span>
            {%- when "in-progress -%}
                <span class="badge badge--in-progress">in progress</span>
            {%- when "released" -%}
                <span class="badge badge--released">released</span>
        {%- endcase -%}
    </li>
{%- endfor -%}
</ul>
