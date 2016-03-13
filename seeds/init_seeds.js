exports.seed = function(knex, Promise) {
    return Promise.all([
        // Inserts seed entries
        knex('um_user').insert({username: 'admin', email: 'admin@gmail.com', display_name: 'System Administrator'}),
        knex('um_user').insert({username: 'user', email: 'user@gmail.com', display_name: 'System User'}),
        
        knex('um_permission').insert({id: 1, action: 'manage', resource: 'category'}),
        knex('um_permission').insert({id: 2, action: 'manage', resource: 'queue'}),
        knex('um_permission').insert({id: 3, action: 'manage', resource: 'status'}),
        knex('um_permission').insert({id: 4, action: 'manage', resource: 'post'}),

        knex('um_role').insert({id: 1, role_name: 'Administrator'}),
        
        knex('um_role_permission').insert({role_id:1, permission_id: 1}),
        knex('um_role_permission').insert({role_id:1, permission_id: 2}),
        knex('um_role_permission').insert({role_id:1, permission_id: 3}),
        knex('um_role_permission').insert({role_id:1, permission_id: 4}),

        knex('um_badge').insert({user_id: 1, role_id: 1})
    ]).then(function(result){
        console.log('Done');
    });
};