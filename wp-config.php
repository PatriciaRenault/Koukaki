<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         's.~89=K#t^qm+5@r=W7^>`a)F,8e]tRWLg#?yCa%uY4vSm:)l<rTJfT!`3PE6%yZ' );
define( 'SECURE_AUTH_KEY',  '@]JZ)_0F4/mh7(`]:uw+Pkka9`>3q;J@0fi,6ahVw:^Zk2WtwU^,s$4[Dq?7:xIh' );
define( 'LOGGED_IN_KEY',    'kGyBKz-W<Pne38IOuv^I9QmnUsyrmS}w#ZPriAjrafqEWgmE>V8c.ekpe?x^UeRL' );
define( 'NONCE_KEY',        'w>XwSuy8AP/kG&hY8wEG{UVDJr$@^yDl|iT;Igo@*@|Qx-*31@DyCERXX/$mnZ6^' );
define( 'AUTH_SALT',        '%4~Z$^n*0VaS5>~Y^kvt,gJ/|=yo.XLfsS.8;$W^FNPhlo]txMNP/`H~H7/$feZy' );
define( 'SECURE_AUTH_SALT', '6P!d:sp,C5E<Thzotmwf1 K0=1vx<jqi{*QB+I@e!!1B#Mr[=6po/]-{f@1 hy[}' );
define( 'LOGGED_IN_SALT',   'wUJDFQ9zgaMid8pxm6}_XAo}Z-[( K8o:6ax%UqP7Ij@ImV)g$gGXTEKh~@n=}e&' );
define( 'NONCE_SALT',       'JTqj;^Y:MaX.%Pv`Jw$6kFY?y;]#[v[$``ekv0(aZ&]MIEGu.P)W$B:vb@IC%dlE' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
