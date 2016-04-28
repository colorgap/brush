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
        $this->assertEquals(200 , $this->response->getStatusCode());
    }
     /**
     * A basic test dashboard.
     *
     * @return void
     */
    public function testRoutesDashboard()
    {
        $this->get('/dashboard');

        $this->assertEquals(200 , $this->response->getStatusCode());
    }
}
