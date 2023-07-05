@extends('_layouts.master')

@section('body')
    @include('_partials.header')
    @include('_sections.hero')
    @include('_sections.items')
    @include('_sections.description')
    @include('_sections.map')
    @include('_partials.footer')
@endsection
