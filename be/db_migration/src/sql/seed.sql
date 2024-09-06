INSERT INTO
    tags (name)
VALUES
    ('JavaScript'),
    ('Python'),
    ('GraphQL'),
    ('PostgreSQL'),
    ('Web Development'),
    ('Data Science'),
    ('Machine Learning'),
    ('API Design');

INSERT INTO
    projects (
        name,
        description,
        release_date,
        repository_url,
        site_url
    )
VALUES
    (
        'Project Alpha',
        'A web development project using JavaScript and GraphQL',
        '2023-01-15',
        'https://github.com/example/project-alpha',
        'https://example.com/project-alpha'
    ),
    (
        'Project Beta',
        'A data science project focused on machine learning with Python',
        '2023-02-20',
        'https://github.com/example/project-beta',
        'https://example.com/project-beta'
    ),
    (
        'Project Gamma',
        'A comprehensive API design project using GraphQL and PostgreSQL',
        '2023-03-10',
        'https://github.com/example/project-gamma',
        NULL
    ),
    (
        'Project Delta',
        'An advanced web development project using modern JavaScript frameworks',
        '2023-04-05',
        'https://github.com/example/project-delta',
        'https://example.com/project-delta'
    );

-- Project Alpha: Associated with 'JavaScript', 'GraphQL', 'Web Development'
INSERT INTO
    project_tags (project_id, tag_id)
VALUES
    (1, 1),
    -- JavaScript
    (1, 3),
    -- GraphQL
    (1, 5);

-- Web Development
-- Project Beta: Associated with 'Python', 'Data Science', 'Machine Learning'
INSERT INTO
    project_tags (project_id, tag_id)
VALUES
    (2, 2),
    -- Python
    (2, 6),
    -- Data Science
    (2, 7);

-- Machine Learning
-- Project Gamma: Associated with 'GraphQL', 'PostgreSQL', 'API Design'
INSERT INTO
    project_tags (project_id, tag_id)
VALUES
    (3, 3),
    -- GraphQL
    (3, 4),
    -- PostgreSQL
    (3, 8);

-- API Design
-- Project Delta: Associated with 'JavaScript', 'Web Development'
INSERT INTO
    project_tags (project_id, tag_id)
VALUES
    (4, 1),
    -- JavaScript
    (4, 5);

-- Web Development