<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <ul>
                <li><a href="#story">Histoire</a></li>
                <li><a href="#characters">Personnages</a></li>
                <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></li>
                <li><a href="#place">Lieu</a></li>
                <li><a href="#studio">Studio Koukaki</a></li>
            </ul>

		</nav><!-- #site-navigation 

        
   <img class="orchid-burger" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Orchid.png'; ?> " alt="image d'une orchidé violette">   
    <img class="marguerite-burger" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Sunflower.png'; ?> " alt="image d'une marguerite">
    <img class="random-flower-burger" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Random-Flower.png'; ?> " alt="image d'une fleur">
    <img class="flower-burger" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Flower.png'; ?> " alt="image d'une fleur orange">
    <img class="hibiscus" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/hibiscus.png'; ?> " alt="image d'une fleur hibiscus">

    -->
	
</header><!-- #masthead -->
