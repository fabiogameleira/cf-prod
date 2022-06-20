/*
 Tornar menu vertical .menu.nav collapse
 Insere texto anterior e next nos links do carousel
*/

if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

(function ($) {
    Drupal.behaviors.customToggler = {
        attach: function (context, settings) {

            var menu_id;
            var ajusta_menu_ativo;
            var link_ativo = $("li.active-trail.active");
  
            $('.block-menu').each(function (i) {
                menu_id = $(this).attr('id');
                menu_id = menu_id.replace(/-menu-/g, "");
                menu_id = menu_id.replace(/-/g, "");

                //$(this).find('.block-title').addClass('Collapse');
                //$(this).find('.block-title').attr("data-toggle", "collapse");
                //$(this).find('.block-title').attr("data-target", "#" + menu_id);

				$(this).find('.menu.nav').attr("id", menu_id);

            });
			

			$('.main-container').hover(function () { 
				   $('.resumo').clearQueue().finish();
				   $('.resumo').fadeOut();
   				   $('#nivel0item1').attr('aria-expanded', 'false');  
				   $("#nivel0item1 > a").attr('aria-expanded', 'false');
				   $("#nivel0item2 > a").attr('aria-expanded', 'false');
				   $("#nivel0item3 > a").attr('aria-expanded', 'false');
				   $("#nivel0item4 > a").attr('aria-expanded', 'false');
				   $("#nivel0item5 > a").attr('aria-expanded', 'false');
				   $("#nivel0item6 > a").attr('aria-expanded', 'false');				   
	
				} 
			);

			// COLOCA FOCO DA NAVEGAÇÃO NO PRIMEIRO ITEM DO SUBMENU
			$('#nivel0item1 > a').focus(function () { 
				   $('.resumo').clearQueue().finish();
				   $('.resumo').fadeOut();
   				   $('#nivel0item1').attr('aria-expanded', 'false');  
				   $("#nivel0item1 > a").attr('aria-expanded', 'false');
				   $("#nivel0item2 > a").attr('aria-expanded', 'false');
				   $("#nivel0item3 > a").attr('aria-expanded', 'false');
				   $("#nivel0item4 > a").attr('aria-expanded', 'false');
				   $("#nivel0item5 > a").attr('aria-expanded', 'false');
				   $("#nivel0item6 > a").attr('aria-expanded', 'false');				   
				} 
			);	
						
		
			// MENU 1	
				// Trata o click a
				$("#nivel0item1 > a").click(function () {
				   //$('.resumo').clearQueue().finish();
				   $(this).attr('aria-expanded',
				   $(this).attr('aria-expanded')=='false' ? 'true' : 'false');
				   // expanded false para demais
				   $("#nivel0item2 > a").attr('aria-expanded', 'false');
				   $("#nivel0item3 > a").attr('aria-expanded', 'false');
				   $("#nivel0item4 > a").attr('aria-expanded', 'false');
				   $("#nivel0item5 > a").attr('aria-expanded', 'false');
				   $("#nivel0item6 > a").attr('aria-expanded', 'false');			
					   
				   //$('#resumo-nivel0item1').fadeIn();					
				   $('#resumo-nivel0item1').toggle();
				   $('.resumo1 .first.item-foco > a').focus();
				});		

				
			/* TRATA click RESUMO SUBMENU DO MENU PRINCIPAL */
					
			$('.resumo .dropdown-submenu > a').on("click", function(e){
					//Obtem e verifica se UL superior é o raiz do menu
					var $parent = $(this).closest('ul');
					// Salva a propriedade do display do item corrente
					var $display = $(this).next('ul.dropdown-menu').is(':visible');
										
					if ($parent.hasClass('nav')) {
	                   $('.resumo ul.dropdown-menu').css('display','none');
					}
					
					if ($display) {
						$(this).next('ul.dropdown-menu').css('display','none');
					}
					else {
						$('.resumo ul.dropdown-menu ul.dropdown-menu ').css('display','none');
						$('.resumo ul.dropdown-menu li.dropdown-submenu > a ').attr('aria-expanded','false');
						$('.resumo ul.dropdown-menu ul.dropdown-menu > a ').attr('aria-expanded','false');
					
						$(this).next('ul.dropdown-menu').css('display','block');
					}
					
					
					$(this).attr('aria-expanded', function () {
						if ($(this).attr('aria-expanded') == 'true') {
							$(this).attr('aria-expanded', 'false');
						}
							else {
						$(this).attr('aria-expanded', 'true');
						}
					});
					
					//if $(this).hasClass('dropdown-toggle') {
						e.stopPropagation();
						e.preventDefault();
					//}

			});	
				

            ajusta_menu_ativo = '#' + $(link_ativo).parent('.menu.nav').attr('id');
            $('.block-title[data-target=' + ajusta_menu_ativo + ']').toggleClass('collapsed');
            $('.block-title[data-target=' + ajusta_menu_ativo + ']').attr('aria-expanded', 'true');
            $(link_ativo).parent('.menu.nav').attr('aria-expanded', 'true');
            $(link_ativo).parent('.menu.nav').addClass('collapse in');
			

        }
    }
})(jQuery);