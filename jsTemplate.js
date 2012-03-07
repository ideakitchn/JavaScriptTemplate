    // Todo: Replace NameGoesHere with the name of your js controller.
    (function (NameGoesHereController, $, undefined) {

        //  Locals Variables
        //  ------------------
        //  Todo:remove or replace with your variables
        var $widget = null; 
        var $whats = null; 


        //  Initialize 
        //  ------------------
        var initialize = function () {
                //Todo:remove/replace with your initialization code                                 
                $widget = $("#Widget"); 
                $whats = $("#WhatsIt"); 
        } 
        $(document).ready(initialize); 


        //  Public Functions
        //  ------------------
        //  Todo:remove/replace
        this.DoSomething = function () {
        } 


        //  A public function that calls a private function
        //  Todo:remove/replace with your code
        this.StopIt = function (StopWhat) {
            makeItGoAway(StopWhat);
        } 


        //  Private Functions
        //  -------------------
        //  Todo:remove/replace with your code
        function makeItGoAway(whatever) {
            $whatsIt.html(whatever); 
        } 

    } (window.NameGoesHereController = window.NameGoesHereController || {}, $));
