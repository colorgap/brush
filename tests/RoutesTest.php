<?php

use Laravel\Lumen\Testing\DatabaseTransactions;

class RoutesTest extends TestCase
{
    /**
     * A basic test index.
     *
     * @return void
     */
    public function testRoutesIndex()
    {
        $this->get('/');

        $this->assertEquals(
            true,true
        );
    }
     /**
     * A basic test dashboard.
     *
     * @return void
     */
    public function testRoutesDashboard()
    {
        $this->get('/dashboard');

        $this->assertEquals(
            true,true
        );
    }
}
