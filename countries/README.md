# Notes

## Ressources
- [Kevin Powell on switching your theme with pure CSS](https://www.youtube.com/watch?v=fyuao3G-2qg&t=795s)
- <!-- Ressources
- https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
 -->


## TODO
- grid layout
- input search
- style select
- select search
- details page

## Notes

### Insert SVG into Searchbar

1. Use as background image

```{css}
input {
    background-image: url(./search.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 0.5rem;
}
```

Problem: cannot change background color
    -although you could use the `data:image` hack
    - or put it in it's own container and apply a filter?


2. use a mask, then apply a background color

```{css}
input {
    mask: url(./search.svg) no-repeat 100% 100%;
    mask-position: center;
    mask-position-x: 0.5rem;
    background-color: green;
    -webkit-mask: url(./search.svg) no-repeat 100% 100%;
    -webkit-mask-position: center;
    -webkit-mask-position-x: 0.5rem;
}
```

Problem: Will make anything else within the input field invisible

3. Create two wrappers and put SVG in markup, apply global styles



