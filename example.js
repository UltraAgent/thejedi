
var redraw, g, renderer;

/* only do all this when document has finished loading (needed for RaphaelJS) */
window.onload = function() {
    
    var width = $(document).width() - 20;
    var height = $(document).height() - 60;
    
    g = new Graph();
	g.addEdge("ШИМ модуляция.PWM", "тут картинка или ссылка", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Что єто?" });
  
	g.addEdge("Драйвер двигателя", "ШИМ модуляция.PWM", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Как управляется?" });
  
	g.addEdge("Драйвер двигателя", "тут картинка", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Как устроено?" });
  
	g.addEdge("Драйвер двигателя", "тут картинка", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Как устроено?" });
  
	g.addEdge("Управление двигателями", "Порт МК перевести в режим OUTPUT", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Функция" });
	
	g.addEdge("Управление двигателями", "Драйвер двигателя", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Чем?" });
	g.addEdge("Чтение датчиков", "Датчик по типу значение 0-5в", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Какой?" }); 
	g.addEdge("Чтение датчиков", "Датчик по типу да\нет", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Какой?" }); 
 g.addEdge("Чтение датчиков", "Порт МК перевести в режим INPUT", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Как?" });   
   g.addEdge("Arduino", "Чтение датчиков", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Функция" });
	
	g.addEdge("Arduino", "Управление двигателями", { directed : true, stroke : "#bfa" , fill : "#56f", label : "Функция" });
	

    /* layout the graph using the Spring layout implementation */
    var layouter = new Graph.Layout.Spring(g);
    
    /* draw the graph using the RaphaelJS draw implementation */
    renderer = new Graph.Renderer.Raphael('canvas', g, width, height);
    
    redraw = function() {
        layouter.layout();
        renderer.draw();
    };
    hide = function(id) {
        g.nodes[id].hide();
    };
    show = function(id) {
        g.nodes[id].show();
    };
    //    console.log(g.nodes["kiwi"]);
};

