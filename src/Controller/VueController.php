<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class VueController extends AbstractController
{

    #[Route("/{vueRouting}", requirements: ["vueRouting" => "^.+"], name: "vue_routing", defaults: ["vueRouting" => null])]
    public function index(): Response
    {
        return $this->render('vue/index.html.twig', [
            'controller_name' => 'VueController',
        ]);
    }
}
