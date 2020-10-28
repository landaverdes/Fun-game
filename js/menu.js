d3.select("#FantasticMenu")
    .on("click",function()
{
d3.select("#food") 
    .classed("hidden",false);
})
d3.select("#panes")
    .on("mouseenter",function()
{
    d3.select("#message")
    .text("I'm a good option but keep looking!")
})
d3.select("#tortas")
   .on("mouseenter",function()
{
    d3.select("#message")
    .text("I could be a good option but, tacos are definitely the best option")
})
d3.select("#tacos")
    .on("mouseenter",function()
{
    d3.select("#message")
    .text("I wish I was the best option. Pupusas are the best option!!!!")
})

d3.select("#PupusaMessage")
    .on("click",function()
{
d3.select("#pupusa")
    .classed("hidden2",false);
})


