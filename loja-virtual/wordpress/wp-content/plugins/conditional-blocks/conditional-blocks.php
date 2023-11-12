<?php
/**
 * Plugin Name: Conditional Blocks
 * Author URI: https://conditionalblocks.com/
 * Description: Conditionally change the visibility of WordPress Blocks for any reason.
 * Author: Conditional Blocks
 * Version: 3.0.5
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: conditional-blocks
 *
 * Requires at least:   5.5
 * Requires PHP:        7.0
 *
 * @package conditional_blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * This constant name is the same the free & pro version, as only one can be active at a time.
 */
if ( ! defined( 'CONDITIONAL_BLOCKS_PATH' ) ) {
	define( 'CONDITIONAL_BLOCKS_PATH', __FILE__ );
}

/**
 * This constant name is the same the free & pro version, as only one can be active at a time.
 *
 * Note version could be a string such as x.x.x-beta2.
 */
if ( ! defined( 'CONDITIONAL_BLOCKS_VERSION' ) ) {
	define( 'CONDITIONAL_BLOCKS_VERSION', '3.0.5' );
}

/**
 * CONBLOCK_Init int the plugin.
 *
 * @DEVS: Don't rely on these for integrations as they may change, use the constants instead or refer to docs.
 */
class CONBLOCK_Init {
	/**
	 * Access all plugin constants
	 *
	 * @var array
	 */
	public $constants;

	/**
	 * Access notices class.
	 *
	 * @var class
	 */
	private $notices;

	/**
	 * Plugin init.
	 */
	public function __construct() {

		$this->constants = array(
			'name'           => 'Conditional Blocks',
			'version'        => '3.0.5',
			'slug'           => plugin_basename( __FILE__, ' . php' ),
			'base'           => plugin_basename( __FILE__ ),
			'name_sanitized' => basename( __FILE__, '. php' ),
			'path'           => plugin_dir_path( __FILE__ ),
			'url'            => plugin_dir_url( __FILE__ ),
			'file'           => __FILE__,
		);

		// include Notices.
		include_once plugin_dir_path( __FILE__ ) . 'classes/class-admin-notices.php';
		// Set notices to class.
		$this->notices = new conblock_admin_notices();
		// Activation.
		register_activation_hook( __FILE__, array( $this, 'activation' ) );
		// Load text domain.
		add_action( 'init', array( $this, 'load_textdomain' ) );
		// Load plugin when all plugins are loaded.
		add_action( 'plugins_loaded', array( $this, 'init' ) );
	}

	/**
	 * Load plugin textdomain.
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'conditional-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
	}


	/**
	 * Plugin init.
	 */
	public function init() {


		require_once plugin_dir_path( __FILE__ ) . 'classes/class-register.php';
		require_once plugin_dir_path( __FILE__ ) . 'classes/class-rest.php';
		require_once plugin_dir_path( __FILE__ ) . 'classes/class-render.php';
		require_once plugin_dir_path( __FILE__ ) . 'classes/class-enqueue.php';
	}

	public function activation() {
		$text = __(
			'Thank you for installing Conditional Blocks! Select any block in the Block Editor to add conditions.   ',
			'conditional-blocks'
		) . ' <a class="button button-secondary" target="_blank" href="' . esc_url( 'https://conditionalblocks.com/features/?utm_source=conditional-blocks-free&utm_medium=referral&utm_campaign=activation-notice' ) . '">' . __( 'Learn more', 'conditional-blocks' ) . '</a>';
		$this->notices->add_notice(
			'success',
			$text
		);

	}
}

new CONBLOCK_Init();

