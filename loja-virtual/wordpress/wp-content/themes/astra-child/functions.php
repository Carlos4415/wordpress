<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );

// Filtrar buscas somente por produtos
add_filter( 'pre_get_posts', 'custom_search' );
function custom_search( $query ) {
    if ( $query->is_search and !is_admin() ) {
        $query->set( 'post_type', array( 'product' ) );
    }
    return $query;
}

// Adiciona um EndPoint ao My Account. Neste caso a lista de desejos.
add_action( 'init', function() {
	add_rewrite_endpoint( 'wishlist', '/wishlist/' );
});

// Adiciona um item ao menu do My Account. Neste caso a lista de desejos.
add_filter( 'woocommerce_account_menu_items', function($items) {
	
	// Guarda dados do item de logout e remove do menu
	// Necessário para que a lista de desejos não fique como último item
	$logout = $items['customer-logout'];
	unset($items['customer-logout']);

	// Adiciona o item de lista de desejos
	$items['wishlist'] = 'Lista de Desejos';
	
	// Adiciona novamente o logout para que ele fique como último item
	$items['customer-logout'] = $logout;
	
	return $items;
}, 99, 1 );

// Minha conta - Nome do usuário
function my_user_name() {
	$current_user = wp_get_current_user();
	return trim( 'Bem-vindo ' . $current_user->user_firstname . ' ' . $current_user->user_lastname );
}
add_shortcode( 'my-user-name', 'my_user_name' );

 // URL Logout
 function my_url_logout() {
	return wp_logout_url();
}
add_shortcode( 'my-url-logout', 'my_url_logout' ); 

/*
add_filter('woocommerce_sale_flash', 'woocommerce_custom_sale_text', 10, 3);
function woocommerce_custom_sale_text($text, $post, $_product) {
	print '<div class="ast-on-card-button ast-onsale-card">Oferta!</div>';
}
*/
?>
